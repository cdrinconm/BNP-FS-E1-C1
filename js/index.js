try {
  $(document).ready(function () {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    $('.carousel').carousel({
      interval: 3000
    });
    $('#exampleModal').on('show.bs.modal', function(e){
      console.log("se esta abriendo el modal");
      $('#registro').removeClass('btn-outline-primary');
      $('#registro').addClass('btn-success');
      $('#registro').prop('disabled', true);
    });
    $('#exampleModal').on('shown.bs.modal', function(e){
      console.log("se abrio el modal");
    });
    $('#exampleModal').on('hide.bs.modal', function(e){
      console.log("se esta cerrando el modal");
    });
    $('#exampleModal').on('hidden.bs.modal', function(e){
      console.log("se cerro el modal");
      $('#registro').removeClass('btn-success');
      $('#registro').addClass('btn-outline-primary');
      $('#registro').prop('disabled', false);
    });
  });
} catch (error) {
  console.error(error)
}