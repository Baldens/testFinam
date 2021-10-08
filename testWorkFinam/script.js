$(document).ready(function () {
    $('#input-submit').click(function(){
        console.log(
            "ФИО: " + $('#input-name_user').val() +
            " Адрес: " + $('#input-adress_user').val() +
            " Email: " +  $('#input-email_user').val() +
            " Тел.: " +  $('#input-telephone_user').val() +
            " Комментарий: " +  $('#input-comment_user').val()
        )
    });
})