from google.cloud import storage
from PIL import Image
import numpy as np
from keras.applications.vgg16 import VGG16
import joblib

model = None
interpreter = None
input_index = None
output_index = None

class_names = ["ayubowan", "his", "good", "house", "i love you", "naraka", "you"]

BUCKET_NAME = "svm-model"


def download_blob(bucket_name, source_blob_name, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)

    blob.download_to_filename(destination_file_name)

    print(f"Blob {source_blob_name} downloaded to {destination_file_name}.")


def predict(request):
    global model
    if model is None:
        print("hello")
        download_blob(
            BUCKET_NAME,
            "models/svm_model.h5",
            "/tmp/svm_model.h5",
        )
        print("hello potta")
        model = joblib.load("/tmp/svm_model.h5")

    image = request.files["file"]
    image = np.array(
        Image.open(image).convert("HSV").resize((224, 224)) # image resizing
    )


    image = image/255 # normalize the image in 0 to 1 range

    
    VGG_model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
    for layer in VGG_model.layers:
        layer.trainable = False

    input_img = np.expand_dims(image, axis=0) #Expand dims so the input is (num images, x, y, c)
    input_img_feature=VGG_model.predict(input_img)
    input_img_features=input_img_feature.reshape(input_img_feature.shape[0], -1)
    prediction_SVM = model.predict(input_img_features)[0] 

    print("Predictions:",prediction_SVM)

    prediction_SVM=class_names[prediction_SVM]

    return {"class": prediction_SVM}
