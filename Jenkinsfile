pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'expo build:android -t apk'
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/*.apk', onlyIfSuccessful: true
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'scp -r build/* user@server:/var/www/html'
            }
        }
    }
    post {
        always {
            bat 'echo "Pipeline completed."'
        }
    }
}
