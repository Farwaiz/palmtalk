pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'expo install' // install dependencies
                bat 'expo build:android' // build the Android APK
                bat 'expo build:ios
            }
        }
        stage('Test') {
            steps {
                bat 'echo "Testing..."'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo "Deploying..."'
            }
        }
    }
    post {
        always {
            echo "Pipeline completed."
        }
    }
}



