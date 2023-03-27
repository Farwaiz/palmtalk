pipeline {
    agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build and Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run build'
                sh 'npm run deploy'
            }
        }
    }
}
