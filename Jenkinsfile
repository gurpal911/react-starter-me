pipeline {
    agent any
    tools { 
        nodejs "nodejs"
    }
    stages {
        stage('Build') {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage('Test') {
            steps {
                sh "sudo npm run test"
            }
        }
        stage('Deploy') {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}