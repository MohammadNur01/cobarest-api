
$('#search-button').on('click', function(){
  $.ajax({
    url: 'https://freesound.org/apiv2/search/text/',
    type: 'get',
    dataType : 'json',
    data : {
      'token': 'TQupVyZtU4porEcEO9i3WNzMxsPuGJ93tvUO8lkt',
      'query': $('#search-input').val()
    },
    success: function(result){
      if(result.results == ''){
        $('#sound-list').html(`<h1>Sounds is not found!</h1>`)
        $('#search-input').val('');
      } else{
        let sounds = result.results;
        $.each(sounds, function(i, data){
          $('#sound-list').append(`
          <div class="col-md-3">
            <div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title">`+ data.name +`</h5><h6 class="card-subtitle mb-2 text-muted">`+ data.username +`</h6><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="#" class="card-link">See Detail</a></div></div>
          </div>
          `)
        })
      }
        
    }
  })
})
