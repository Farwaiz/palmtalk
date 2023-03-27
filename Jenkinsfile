pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                cd 'FrontEnd'
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        
        stage('Build and Deploy') {
            when {
                branch 'main'
            }
            steps {
                bat 'npm run build'
                bat 'npm run deploy'
            }
        }
    }
}
