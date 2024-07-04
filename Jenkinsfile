pipeline {
    agent any
    tools {nodejs "22.3.0"}

    environment {
        ENV_NAME = "${env.GIT_BRANCH == 'origin/main' ? 'prod' : (env.GIT_BRANCH == 'origin/staging' ? 'preprod' : 'dev')}"
    }
    stages {
        stage("Clean") {
            steps {
                script {
                    echo "Cleaning application ..."
                    sh "rm -rf ${WORKSPACE}/backend/dist/*"
                    sh "rm -rf ${WORKSPACE}/backend/node_modules"
                    if (fileExists("${WORKSPACE}/frontend/build")) {
                        sh "rm -rf ${WORKSPACE}/frontend/build"
                    }
                    sh "rm -rf ${WORKSPACE}/frontend/node_modules"
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    echo "Building application ..."
                    sh "cd ${WORKSPACE}/backend && npm install && npm run build"
                    sh "cd ${WORKSPACE}/frontend && npm install && npm run build"
                }
            }
        }
         stage("Unit tests") {
            steps {
                script {
                    echo "Test application ..."
                    echo "Frontend tests ..."
                    sh "cd ${WORKSPACE}/frontend && npm run lint && npm run test"
                    echo "Backend tests ..."
                    sh "cd ${WORKSPACE}/backend && npm run lint && npm run test"
                }
            }
        }
        stage("Container dependancies check (Redis/MongoDB)") {
            steps {
                script {
                    echo "Ping dependancies ..."
                }
            }
        }
        stage("Push tag versionning") {
            when {
                beforeAgent true
                anyOf {
                    expression {ENV_NAME == 'prod'}
                }
            }
            steps {
                script {
                    sshagent(credentials: ['jenkins-ssh-git-push']) {
                        sh "${WORKSPACE}/scripts/git_tag_versionning.bash"
                    }   
                }
            }
        }
         stage("Deploy") {
            steps {
                script {
                    if (ENV_NAME != 'prod') {
                        sshagent(credentials: ['jenkins-ssh-git-push']) {
                            TAG= sh (script: 'git describe --abbrev=0 --tags', returnStdout: true).trim()
                            sh "echo tag is ${TAG}"
                        }
                    } else {
                        sh TAG="${NEW_TAG}"
                        sh "echo new tag is ${TAG}"
                    }
                    echo "Deploy application ..."
                    sh "cp /portfolio/global/.env.${ENV_NAME} ${WORKSPACE}/env/"
                    sh "cp /portfolio/backend/.env.${ENV_NAME} ${WORKSPACE}/backend/env/"
                    sh "cp /portfolio/frontend/.env.${ENV_NAME} ${WORKSPACE}/frontend/env/"
                    sh "VERSION=${TAG} docker-compose -f ${WORKSPACE}/docker-compose.yml --env-file ${WORKSPACE}/env/.env.${ENV_NAME}  -p 'portfolio-${ENV_NAME}' up -d"
                }
            }
        }
        stage("Tests e2e") {
            steps {
                script {
                    echo "Test application E2E ..."
                    // npm run test:e2e
                }
            }
        }
    }
    
}
