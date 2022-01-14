const BREAK_POINT = 1200;

export default {
  desktop:[{
    pos : {
      top   : '877px',
      left  : '83px'
    },
    width   : 90,
    height  : 90,
    level   : 10
  },{
    pos : {
      top   :'1288px',
      right :'39px'
    },
    width   : 39,
    height  : 39,
    level   : 30
  },{
    pos : {
      top   :'2619px',
      left  :`${(window.innerWidth - BREAK_POINT) / 2 - 20}px`
    },
    width   : 30,
    height  : 138,
    level   : 30
  },{
    pos : {
      top   :'2669px',
      left  :'38%'
    },
    width   : 30,
    height  : 138,
    level   : 50
  },{
    pos : {
      top   :'3062px',
      right :`${(window.innerWidth - BREAK_POINT) / 2 + 380}px`
    },
    width   : 73,
    height  : 73,
    level   : 10
  }],

  mobile:[{
    pos : {
      top   :'670px',
      left  :'-20px'
    },
    width   : 90,
    height  : 90,
    level   : 10
  },{
    pos : {
      top   :'1288px',
      right :'39px'
    },
    width   : 39,
    height  : 39,
    level   : 30
  }]
}