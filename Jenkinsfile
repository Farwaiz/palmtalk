pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'echo "Building..."'
                bat 'npm install' // install dependencies
          
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



