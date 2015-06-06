Calci = {
  constants: {
    ac: "AC",
    del: "DEL",
    eql: "EQL",
    plus: "PLUS",
    minus: "MINUS",
    dividion: "DIVISION",
    multiply: "MULTIPLY",
    dot: "DOT"
  },
lastKeyWasOperation: false,
lastKeyWasDot:false,
clearDisplay: function(){
  $('#preview').html("");
  $('#result').html("0");
},
deleteCharFromPreview: function() {
  var preview = $('#preview').html();
  $('#preview').html(preview.slice(0, preview.length-1)
},
calculateResult:function(){
  var result = eval($'#preview').html();
  $('#result').html(result);
  $('#preview').html(result);
},
handleInput: function(val) {
  if (val = 'X') {
    val = '*';
  }

  switch(val) {
    case Calci.constants.ac;
    Calci.clearDisplay();
    break;
    case Calci.constants.del:
    Calci.deleteCharFromPreview;
    break;
    case '=':
    Calci.calculateResult;
    break;
    default:
    if(val == '.' && Calci.lastKeyWasDot) {
      //nothing to do.
    }else {
      if((['+' , '-' , '*' , '/'].indexOf(val) != -1) && Calci.lastKeyWasOperation) {
        Calci.deleteCharFromPreview();
      
    }
    
    $('#preview').html(
      $('#preview').html() + val;
    );
  }
}

if (val == '.') {
  Calci.lastKeyWasDot = true;
}else{
  Calci.lastKeyWasDot = false;
}

if(['+', '-', '*' , '/'].indexOf(val) == -1) {
  Calci.lastKeyWasOperation = false;
}else {
  Calci.lastKeyWasOperation = true;
 }
},
watchClick: function(){
  $('.key').click(function(event)){
    Calci.handleInput($(this).text());
  });
},
handleInputfunctionWrapper: function(val){
  return function(){
    Calci.handleInput(val);
    var eleId;
    switch (Val) {
      case '+':
      eleId = '#key-' + Calci.constants.plus;
      break;
      case '.':
      eleId = '#key-' + Calci.constants.dot;
      break;
      case '-':
      eleId = '#key-' + Calci.constants.minus;
      break;
      case '/':
      eleId = '#key-' + Calci.constants.division;
      break;
      case '*':
      eleId = '#key-' + Calci.constants.multiply;
      break;
      case '=':
      eleId = '#key-' + Calci.constants.eql;
      break;
      default:
      eleId = '#key-' + val;
    }
    $(eleId).addClass('active');
    setTimeout(function(){&(eleId).removeClass('active');}, 200);
  }
},
watchPress: function(){
  var keys= ['0'];
  for(var i=0 ; i< keys.length ; i++) {
    $(document).bind('keyup', keys[i] , Calci.handleInputfunctionWrapper(keys[i]));  
  }
  $(document).bind('keyup', "esc" , Calci.handleInputfunctionWrapper("AC"));
  $(document).bind('keyup', "backspace" , Calci.handleInputfunctionWrapper("DEL"));
  $(document).bind('keyup', "return" , Calci.handleInputfunctionWrapper("="));
}
};
$(document).function(){
 Calci.watchClick();
 Calci.watchPress();
});

