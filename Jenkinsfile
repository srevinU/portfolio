pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build application'
            }
        }
         stage('Test') {
            steps {
                echo 'Test application'
            }
        }
         stage('Deploy') {
            steps {
                echo 'Deploy application'
            }
        }
    }
    post {
        always {
            emailext body: 'Portfolio pipeline completed !', subject: 'Portfolio pipeline completed', to: 'cedricsegurafr@gmail.com'
        }
    }
}
