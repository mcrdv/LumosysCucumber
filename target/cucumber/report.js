$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('LumosysTestCucumber\LoginLumosys.feature');
formatter.feature({
  "line": 1,
  "name": "Lumosys Login",
  "description": "",
  "id": "lumosys-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Succesful Login with multiple results",
  "description": "",
  "id": "lumosys-login;succesful-login-with-multiple-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have opened the Lumosys site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login with an exist user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate there are Login",
  "keyword": "Then "
});
formatter.match({
  "location": "LumosysStepDefinitions.I_have_opened_the_Lumosys_site()"
});
formatter.result({
  "duration": 16464596408,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NCQJ802C\u0027, ip: \u0027192.168.1.208\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x01057DF3+1474035]\n\tOrdinal0 [0x00FD07D1+919505]\n\tOrdinal0 [0x00F6CB43+510787]\n\tOrdinal0 [0x00F01B0F+72463]\n\tOrdinal0 [0x00EFE3F3+58355]\n\tOrdinal0 [0x00F20CE4+199908]\n\tOrdinal0 [0x00F2069D+198301]\n\tOrdinal0 [0x00F1EECB+192203]\n\tOrdinal0 [0x00F05FF6+90102]\n\tOrdinal0 [0x00F0765A+95834]\n\tOrdinal0 [0x00F07554+95572]\n\tGetHandleVerifier [0x011B231C+1249612]\n\tGetHandleVerifier [0x01101575+525221]\n\tGetHandleVerifier [0x01101310+524608]\n\tOrdinal0 [0x01065D28+1531176]\n\tGetHandleVerifier [0x01101D4A+527226]\n\tOrdinal0 [0x00FE75F6+1013238]\n\tOrdinal0 [0x00FE746F+1012847]\n\tOrdinal0 [0x00FF365B+1062491]\n\tOrdinal0 [0x00FF379F+1062815]\n\tOrdinal0 [0x00FF2745+1058629]\n\tBaseThreadInitThunk [0x74D18494+36]\n\tRtlAreBitsSet [0x779C41C8+136]\n\tRtlAreBitsSet [0x779C4198+88]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat LumosysTestCucumber.LumosysStepDefinitions.I_have_opened_the_Lumosys_site(LumosysStepDefinitions.java:23)\r\n\tat ✽.Given I have opened the Lumosys site(LumosysTestCucumber\\LoginLumosys.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LumosysStepDefinitions.I_Login_with_an_exist_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LumosysStepDefinitions.I_validate_there_are_Login()"
});
formatter.result({
  "status": "skipped"
});
});