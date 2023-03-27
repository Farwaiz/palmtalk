pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'expo install'
                bat 'expo build:android'
                bat 'expo build:ios'
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



