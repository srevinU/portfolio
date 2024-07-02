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
                    sh "cd ${WORKSPACE}/frontend && npm install" // && npm run build (Taking to much ressource)
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
         stage("Deploy") {
            steps {
                script {
                    echo "Deploy application ..."
                    if (ENV_NAME == 'prod') {
                        
                    }
                    sh '''
                        cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g' > verisonFile.txt
                    '''
                    CURRENT_VERSION = readFile('verisonFile.txt').trim()
                    sh "npm run release:major"
                     sh '''
                        cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g' > verisonFile.txt
                    '''
                    NEW_VERSION = readFile('verisonFile.txt').trim()
                    sh "cp /portfolio/global/.env.${ENV_NAME} ${WORKSPACE}/env/"
                    sh "cp /portfolio/backend/.env.${ENV_NAME} ${WORKSPACE}/backend/env/"
                    sh "cp /portfolio/frontend/.env.${ENV_NAME} ${WORKSPACE}/frontend/env/"
                    sh "VERSION=${NEW_VERSION} docker-compose -f ${WORKSPACE}/docker-compose.yml --env-file ${WORKSPACE}/env/.env.${ENV_NAME}  -p 'portfolio-${ENV_NAME}' up -d"
                    withCredentials([sshUserPrivateKey(credentialsId: "my-github", keyFileVariable: 'key')]) {
                        sh '''
                            sh 'GIT_SSH_COMMAND = "ssh -i $key"'
                            git tag -a v${NEW_VERSION} -m 'Release version ${NEW_VERSION} from ${CURRENT_VERSION}'
                            git push origin v${NEW_VERSION}
                        '''
                    }

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
