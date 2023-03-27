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
                    bat 'npm run'
                }
            }
        }
        
        stage('Build') {
            when {
                branch 'main'
            }
            steps {
                dir('FrontEnd') {
                    bat 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                bat './jenkins/scripts/deliver.sh'
            }
        }
    }
    
    post {
        always {
            echo "Pipeline completed."
        }
    }
}
