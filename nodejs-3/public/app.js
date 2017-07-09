$(document).ready(function() {
  $('#ajax-submit').click(function() {

    $.ajax({
      type: 'get',
      url: './get-data',
      data: {
        username: $('#ajax-field').val()
      },
      success: function(data) {
        $('#ajax-response').text(data)
      }
    })

  })
})
