export class Init {
    load() {
      if(localStorage.getItem('times') === null || localStorage.getItem('times') == undefined) {
        console.log('Não existe nenhum time...');
        let times = [
          {
            text: 'Santos FC'
          }, 
          {
            text: 'Palmeiras'
          }, 
          {
            text: 'São Paulo'
          }
        ];
  
        localStorage.setItem('times', JSON.stringify(times));
        return 
      } else {
        console.log('Ja existe no localStorage a variável Times');
      }
    }
  }