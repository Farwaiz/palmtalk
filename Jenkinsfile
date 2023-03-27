pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm build:android'
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



