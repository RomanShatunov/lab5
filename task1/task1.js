var catVasiliy = {
    name: 'Василий',
    birthday: new Date(),
    listOfFears: ['vacuum cleaner', 'beep'],
    listOfPositive:  ['ksksks'],
    meow: function () {
      console.log('Meow!');
    },
    reaction: function(feeling) {
      if (this.listOfFears.indexOf(feeling) > -1) {
        this.meow();
        console.log('run from here!!!!')
      }
      else if (this.listOfPositive.indexOf(feeling) > -1) {
        console.log('Mrrr!')
      }
    },
  };