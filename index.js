function wakeUp(callback) {
  setTimeout(() => {
    console.log("Thuc day");

    callback();
  }, 2000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("An sang");

    callback();
  }, 1000);
}
function goToSchool(callback) {
  setTimeout(() => {
    console.log("Di hoc");
    callback();
  }, 3000);
}

function lunch(callback) {
  setTimeout(() => {
    console.log("An trua");

    callback();
  }, 5000);
}

function goToWork(callback) {
  setTimeout(() => {
    console.log("Di lam them");
    callback();
  }, 4000);
}

function goHome() {
  setTimeout(() => {
    console.log("Ve nha");
  }, 6000);
}

wakeUp(function () {
  eatBreakfast(function () {
    goToSchool(function () {
      lunch(function () {
        goToWork(function () {
          goHome();
        });
      });
    });
  });
});
