pipeline {
    agent any
    tools {nodejs "22.3.0"}

    environment {
        ENV_NAME = "${env.GIT_BRANCH == 'origin/main' ? 'prod' : (env.GIT_BRANCH == 'origin/staging' ? 'preprod' : 'dev')}"
        TARGET = "${ENV_NAME == 'prod' ? 'production' : (ENV_NAME == 'preprod' ? 'preproduction' : 'development')}"
    }
    stages {
        stage("Clean") {
            steps {
                script {
                    echo "Cleaning application ..."
                    sh "rm -rf ${WORKSPACE}/backend/dist/*"
                    sh "rm -rf ${WORKSPACE}/backend/node_modules"
                    if (fileExists("${WORKSPACE}/frontend/build")) {
                        sh "rm -rf ${WORKSPACE}/frontend/build/*"
                    } else {
                        sh "mkdir ${WORKSPACE}/frontend/build"
                    }
                    sh "rm -rf ${WORKSPACE}/frontend/node_modules"
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    echo "Building application ..."
                    sh "mkdir ${WORKSPACE}/env"
                    sh "cp -r /portfolio/env/global/. ${WORKSPACE}/env"
                    sh "mkdir ${WORKSPACE}/backend/env"
                    sh "cp -r /portfolio/env/backend/. ${WORKSPACE}/backend/env"
                    sh "mkdir ${WORKSPACE}/frontend/env"
                    sh "cp -r /portfolio/env/frontend/. ${WORKSPACE}/frontend/env"
                    sh "cd ${WORKSPACE}/backend && npm install && npm run build"
                    sh "cd ${WORKSPACE}/frontend && npm install && npm run build:${TARGET}"
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
                    expression {ENV_NAME == 'preprod'}
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
                    sshagent(credentials: ['jenkins-ssh-git-push']) {
                        sh "git remote set-url origin git@github.com:srevinU/portfolio.git"
                        sh "git config --global user.name 'Jenkins'"
                        TAG= sh (script: 'git describe --abbrev=0 --tags', returnStdout: true).trim()
                        sh "echo tag is ${TAG}"
                    }
                    echo "Deploy application ..."
                    sh "VERSION=${TAG} TARGET=${TARGET} docker-compose -f ${WORKSPACE}/docker-compose.yml --env-file ${WORKSPACE}/env/.env.${TARGET}  -p 'portfolio-${ENV_NAME}' up -d --build"
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
