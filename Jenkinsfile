pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'echo "Building..."'
                bat 'npm install' // install dependencies
                bat 'npm build:android' // build the Android APK
                bat 'npm build:ios'
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



