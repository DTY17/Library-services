module.exports = {
  apps: [
    {
      name: "BookService",
      script: "java",
      args: "-jar BookService/target/BookService-0.0.1-SNAPSHOT.jar",
      log_file: "./log/BookService.log"
    },
    {
      name: "RecordService",
      script: "java",
      args: "-jar RecordService/target/RecordServie-0.0.1-SNAPSHOT.jar",
      log_file: "./log/RecordService.log"
    },
    {
      name: "UserService",
      script: "java",
      args: "-jar UserService/target/UserService-0.0.1-SNAPSHOT.jar",
      log_file: "./log/UserService.log"
    }
  ]
}
