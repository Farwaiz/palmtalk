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
            dir('FrontEnd') {
                bat 'npm install'
            }
        }
    }

        
    stage('Run Tests') {
        steps {
            dir('FrontEnd') {
                bat 'npm app'
            }
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
