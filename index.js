window.onload=function(){
  let fig =  document.getElementById('fig');
  let figDetails = document.getElementById('fig-details');

  let mint2 =  document.getElementById('mint2');
  let mint2Details = document.getElementById('mint2-details');

  let mushroom =  document.getElementById('mushroom');
  let mushroomDetails = document.getElementById('mushroom-details');

  let mint1 =  document.getElementById('mint1');
  let mint1Details = document.getElementById('mint1-details');

  let kiwi =  document.getElementById('kiwi');
  let kiwiDetails = document.getElementById('kiwi-details');

  let seed =  document.getElementById('seed');
  let seedNote = document.getElementsByClassName('seedNote');

  let words = document.getElementById('words');

  function showWords(){
    if(figDetails.style.display === 'block'|| mint2Details.style.display === 'block' || mushroomDetails.style.display === 'block' || mint1Details.style.display === 'block' || kiwiDetails.style.display === 'block'){

      anime({
        targets:'#words',
        translateY:0
      });
      words.style.display = 'none';
    }else{
       anime({
        targets:'#words',
        duration: 2000,
        easing: 'easeOutExpo',
        delay:200,
        translateY:-20
      });
       words.style.display = 'block';
    }
  }

  function hideSeedNote(){
    for(let i = 0; i < seedNote.length; i++){
      if(seedNote[i].style.display !== 'none'){
        seedNote[i].style.display = 'none';
        let relativeOffset = anime.timeline();
      relativeOffset
        .add({
          targets:'#seed .seed1',
          rotate:'-1turn'
        })
        .add({
          targets:'#seed .seed1-note',
          scale:1
        })
        .add({
          targets:'#seed .seed2',
          rotate:'-1turn'
        })
        .add({
          targets:'#seed .seed2-note',
          scale:1
        })
        .add({
          targets:'#seed .seed3',
          rotate:'-1turn'
        })
        .add({
          targets:'#seed .seed3-note',
          scale:1
        })
      }
    }
  }

  fig.addEventListener('pointerdown', function(e){
    e.preventDefault();
    if(figDetails.style.display !== 'block'&& mint2Details.style.display !== 'block' && mushroomDetails.style.display !== 'block' && mint1Details.style.display !== 'block' && kiwiDetails.style.display !== 'block'){
      figDetails.style.display = 'block';
      hideSeedNote();
      anime({
        targets: '#fig',
        translateX: '-200px',
        translateY: '150px',
        easing: 'easeInOutQuad',
        duration: 1000,
        rotate:90
      })
      anime({
          targets:'#fig-details',
          duration: 1000,
          easing: 'easeOutExpo',
          delay:200,
          translateY:10,
          scale: 1.5,
          opacity: 0.8
      });
    } else{
      anime({
          targets: '#fig',
          translateX: 0,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 1000
        })
       anime({
          targets:'#fig-details',
          translateY:0,
          scale: 1
      });
       figDetails.style.display = 'none';
    }
      showWords();
  }, false);

  mint2.addEventListener('pointerdown', function(e){
    e.preventDefault();
    if(mint2Details.style.display !== 'block' && figDetails.style.display !== 'block' && mushroomDetails.style.display !== 'block' && mint1Details.style.display !== 'block' && kiwiDetails.style.display !== 'block'){
      mint2Details.style.display = 'block';
      hideSeedNote();
      anime({
        targets: '#mint2',
        translateX: '-180px',
        translateY: '120px',
        easing: 'easeInOutQuad',
        duration: 1000,
        rotate:45
      })
      anime({
          targets:'#mint2-details',
          duration: 1000,
          easing: 'easeOutExpo',
          delay:200,
          translateY:10,
          scale: 1.5,
          opacity: 0.8
      });
    } else{
      anime({
          targets: '#mint2',
          translateX: 0,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 1000
        })
       anime({
          targets:'#mint2-details',
          translateY:0,
          scale: 1
      });
       mint2Details.style.display = 'none';
    }
    showWords();
  },false);

  mushroom.addEventListener('pointerdown', function(e){
    e.preventDefault();
    if(mushroomDetails.style.display !== 'block' && figDetails.style.display !== 'block' && mint2Details.style.display !== 'block' && mint1Details.style.display !== 'block' && kiwiDetails.style.display !== 'block'){
      mushroomDetails.style.display = 'block';
      hideSeedNote();
      anime({
        targets: '#mushroom',
        translateX: '20px',
        translateY: '-200px',
        easing: 'easeInOutQuad',
        duration: 1000,
        scale:-0.8,
        rotate:360
      })
      anime({
          targets:'#mushroom-details',
          duration: 1000,
          easing: 'easeOutExpo',
          delay:200,
          translateY:10,
          scale: 1.5,
          opacity: 0.8
      });
    } else{
      anime({
          targets: '#mushroom',
          translateX: 0,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 1000,
          scale:1,
          rotate:-360
        })
       anime({
          targets:'#mushroom-details',
          translateY:0,
          scale: 1
      });
       mushroomDetails.style.display = 'none';
    }
    showWords();
  }, false);

  mint1.addEventListener('pointerdown', function(e){
    e.preventDefault();
    if(mint1Details.style.display !== 'block' && figDetails.style.display !== 'block' && mint2Details.style.display !== 'block' && mushroomDetails.style.display !== 'block' && kiwiDetails.style.display !== 'block'){
      mint1Details.style.display = 'block';
      hideSeedNote();
      anime({
        targets: '#mint1',
        translateX: '-40px',
        translateY: '-450px',
        easing: 'easeInOutQuad',
        duration: 1000,
        rotate:'1.5turn'
      })
      anime({
          targets:'#mint1-details',
          duration: 1000,
          easing: 'easeOutExpo',
          delay:200,
          translateY:10,
          scale: 1.5,
          opacity: 0.8
      });
    } else{
      anime({
          targets: '#mint1',
          translateX: 0,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 1000,
          rotate:'-1turn'
        })
       anime({
          targets:'#mint1-details',
          translateY:0,
          scale: 1
      });
       mint1Details.style.display = 'none';
    }
    showWords();
  }, false);

  kiwi.addEventListener('pointerdown', function(e){
    e.preventDefault();
    if(kiwiDetails.style.display !== 'block' && figDetails.style.display !== 'block' && mint2Details.style.display !== 'block' && mushroomDetails.style.display !== 'block' && mint1Details.style.display !== 'block'){
      kiwiDetails.style.display = 'block';
      hideSeedNote();
      anime({
        targets: '#kiwi',
        translateX: '-250px',
        translateY: '-200px',
        easing: 'easeInOutQuad',
        duration: 1000,
        rotate:'0.5turn',
        scale:0.8
      })
      anime({
          targets:'#kiwi-details',
          duration: 1000,
          easing: 'easeOutExpo',
          delay:200,
          translateY:10,
          scale: 1.5,
          opacity: 0.8
      });
    } else{
      anime({
          targets: '#kiwi',
          translateX: 0,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 1000,
          rotate:'-1turn'
        })
       anime({
          targets:'#kiwi-details',
          translateY:0,
          scale: 1
      });
       kiwiDetails.style.display = 'none';
    }
    showWords();
  }, false);

  seed.addEventListener('pointerdown', function(e){
    e.preventDefault();
    for(let i = 0; i < seedNote.length; i++){
      if(kiwiDetails.style.display !== 'block' && figDetails.style.display !== 'block' && mint2Details.style.display !== 'block' && mushroomDetails.style.display !== 'block' && mint1Details.style.display !== 'block' && seedNote[i].style.display !== 'block'){

        seedNote[i].style.display = 'block';

        let relativeOffset = anime.timeline();
        relativeOffset
          .add({
            targets:'#seed .seed1',
            rotate:'1turn'
          })
          .add({
            targets:'#seed .seed1-note',
            rotate:'1turn',
            scale:1.8
          })
          .add({
            targets:'#seed .seed2',
            rotate:'1turn'
          })
          .add({
            targets:'#seed .seed2-note',
            rotate:'1turn',
            scale:1.8
          })
          .add({
            targets:'#seed .seed3',
            rotate:'1turn'
          })
          .add({
            targets:'#seed .seed3-note',
            rotate:'1turn',
            scale:1.8
          })
      }else{
       seedNote[i].style.display = 'none';
        let relativeOffset = anime.timeline();
        relativeOffset
          .add({
            targets:'#seed .seed1',
            rotate:'-1turn',
          })
          .add({
            targets:'#seed .seed1-note',
            scale:1
          })
          .add({
            targets:'#seed .seed2',
            rotate:'-1turn',
          })
          .add({
            targets:'#seed .seed2-note',
            scale:1
          })
          .add({
            targets:'#seed .seed3',
            rotate:'-1turn',
          })
          .add({
            targets:'#seed .seed3-note',
            scale:1
          })
      }
    }
  }, false);

}