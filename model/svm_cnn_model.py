#importing libraries
import numpy as np 
import matplotlib.pyplot as plt
import glob
import cv2    
from PIL import Image
from keras.models import Model, Sequential
import os
import seaborn as sns
from keras.applications.vgg16 import VGG16    
from sklearn.metrics import accuracy_score
from google.colab import drive
drive.mount('/content/drive')

#Loading training images and preprocessing them
SIZE = 224

train_images = []
train_labels = [] 
for directory_path in glob.glob("/content/drive/MyDrive/archive/train/*"):
    label = directory_path.split("/")[-1]
    for img_path in glob.glob(os.path.join(directory_path, "*.jpg")):
        img = cv2.imread(img_path, cv2.IMREAD_COLOR)
        img = cv2.resize(img, (SIZE, SIZE))
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        train_images.append(img)
        train_labels.append(label)
        
train_images = np.array(train_images)
train_labels = np.array(train_labels)

#Loading test images
test_images = []
test_labels = [] 
for directory_path in glob.glob("/content/drive/MyDrive/archive/test/*"):
    labels = directory_path.split("/")[-1]
    for img_path in glob.glob(os.path.join(directory_path, "*.jpg")):
        img = cv2.imread(img_path, cv2.IMREAD_COLOR)
      
        img = cv2.resize(img, (SIZE, SIZE))
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        test_images.append(img)
        test_labels.append(labels)

test_images = np.array(test_images)
test_labels = np.array(test_labels)

from sklearn import preprocessing
label_enc = preprocessing.LabelEncoder()
label_enc.fit(test_labels)
test_labels_encoded = label_enc.transform(test_labels)
label_enc.fit(train_labels)
train_labels_encoded = label_enc.transform(train_labels)

x_train, y_train, x_test, y_test = train_images, train_labels_encoded, test_images, test_labels_encoded

x_train, x_test = x_train / 255.0, x_test / 255.0 #Normalization

#Loading VGG model for feature extraction
VGG_model = VGG16(weights='imagenet', include_top=False, input_shape=(SIZE, SIZE, 3))

VGG_model.summary()
for layer in VGG_model.layers:
	layer.trainable = False
        
#Extracting features from the train images using vgg16
feature_extraction=VGG_model.predict(x_train)

features = feature_extraction.reshape(feature_extraction.shape[0], -1)

X_for_SVM = features
    
#Loading svm model for classification
from sklearn import svm
from sklearn.model_selection import GridSearchCV
model=svm.SVC(gamma=0.0001, C=100)

model.fit(X_for_SVM,y_train)

X_test_feature = VGG_model.predict(x_test)
X_test_features = X_test_feature.reshape(X_test_feature.shape[0], -1)

prediction_SVM = model.predict(X_test_features)

prediction_SVM = label_enc.inverse_transform(prediction_SVM)

print("The predicted Data is :")
print(prediction_SVM)
print("The actual data is:")
print(np.array(y_test))
print(f"The model is {accuracy_score(test_labels, prediction_SVM)*100}% accurate")

from sklearn.metrics import confusion_matrix

cm = confusion_matrix(test_labels, prediction_SVM)

sns.heatmap(cm, annot=True)

#Testing model with random images from the test set
n=np.random.randint(0, x_test.shape[0])
img = x_test[n]
plt.imshow(img)
input_img = np.expand_dims(img, axis=0) #Expand dims so the input is (num images, x, y, c)
input_img_feature=VGG_model.predict(input_img)
input_img_features=input_img_feature.reshape(input_img_feature.shape[0], -1)
prediction_SVM = model.predict(input_img_features)[0] 
print(prediction_SVM)
prediction_SVM = label_enc.inverse_transform([prediction_SVM])  #Reverse the label encoder to original name
print("The prediction for this image is: ", prediction_SVM)
print("The actual label for this image is: ", test_labels[n])

import joblib # saving model
joblib.dump(model, '/content/drive/MyDrive/svm_model/svm_model.h5')