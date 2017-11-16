$(document).ready(function(){

  /*============*/
  /*====Calon===*/
  /*============*/
  $('#loading').hide();
  $('#btn-tambah').click(function(){
    $('#btn-ubah').hide();
    $('#btn-simpan').show();
    $('#modal-title').html('Form Tambah Data');
    $("#form input, #form textarea").val(""); 
    $('#output').attr('src', '');
  });

  $('#btn-simpan').click(function(){
    var n = $('#nama').val();
    var k = $('#kelas').val();
    var o = $('#organisasi').val();
    var v = $('#visi').val();
    var m = $('#misi').val();
    var f = $('#foto').val();
    
    if( n == '' || k == '' || o == '' || v == '' || m == '' || f == '' ){
      swal("Oops...", "Form tidak boleh ada yang kosong!", "error");
    }else{
      var data = new FormData();

      data.append('nama', $('#nama').val());
      data.append('kelas', $('#kelas').val());
      data.append('organisasi', $('#organisasi').val());
      data.append('visi', $('#visi').val());
      data.append('misi', $('#misi').val());

      data.append('type', 'insert');

      data.append('foto', $("#foto")[0].files[0]);

      $('#loading').show();
      $.ajax({
        url         : 'ajax/calon.php',
        type        : 'POST',
        data        : data,
        processData : false,
        contentType : false,
        dataType    : 'json',
        beforeSend  : function(e) {
          if(e && e.overrideMimeType) {
            e.overrideMimeType("application/json;charset=UTF-8");
          }
        },
        success     : function(response){ 
          $("#loading").hide(); 
          
          if(response.status == "sukses"){ 
            $("#view").html(response.html);
            swal("Good job!", "Data berhasil disimpan", "success");
            $("#form input, #form textarea").val(""); 
            $('#output').attr('src', '');
            $("#modal-form").modal('hide'); 
          }else{ 
            swal("Oops...", "Ada yang error!", "error");
          }
        },
        error       : function (xhr, ajaxOptions, thrownError) {
          alert("ERROR : "+xhr.responseText); 
        }
      });
    }

  });

  $('#btn-ubah').click(function(){
    var n = $('#nama').val();
    var k = $('#kelas').val();
    var o = $('#organisasi').val();
    var v = $('#visi').val();
    var m = $('#misi').val();
    
    if( n == '' || k == '' || o == '' || v == '' || m == '' ){
      swal("Oops...", "Form tidak boleh ada yang kosong!", "error");
    }else{
      var data = new FormData();

      data.append('nama', $('#nama').val());
      data.append('kelas', $('#kelas').val());
      data.append('organisasi', $('#organisasi').val());
      data.append('visi', $('#visi').val());
      data.append('misi', $('#misi').val());

      data.append('data-id', $('#data-id').val());
      data.append('data-foto', $('#data-foto').val());

      data.append('type', 'update');

      data.append('foto', $("#foto")[0].files[0]);

      $('#loading').show();
      $.ajax({
        url         : 'ajax/calon.php',
        type        : 'POST',
        data        : data,
        processData : false,
        contentType : false,
        dataType    : 'json',
        beforeSend  : function(e) {
          if(e && e.overrideMimeType) {
            e.overrideMimeType("application/json;charset=UTF-8");
          }
        },
        success     : function(response){ 
          $("#loading").hide(); 
          
          if(response.status == "sukses"){ 
            $("#view").html(response.html);
            swal("Good job!", "Data berhasil diubah", "success");
            $("#form input, #form textarea").val(""); 
            $('#output').attr('src', '');
            $("#modal-form").modal('hide'); 
          }else{ 
            swal("Oops...", "Ada yang error!", "error");
          }
        },
        error       : function (xhr, ajaxOptions, thrownError) {
          alert("ERROR : "+xhr.responseText); 
        }
      });
    }

  });

  $("#btn-hapus").click(function(){ 
    
    var data = new FormData();
    data.append('data-id', $('#data-id').val());
    data.append('data-foto', $('#data-foto').val());
    data.append('type', 'delete');
    
    $("#load").show(); 
    
    $.ajax({
      url: 'ajax/calon.php',
      type: 'POST',
      data: data, 
      processData: false,
      contentType: false,
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ 
        $("#load").hide(); 
        $("#view").html(response.html);
        swal("Good job!", "Data berhasil dihapus", "success");
        $("#modal-hapus").modal('hide');
      },
      error: function (xhr, ajaxOptions, thrownError) { 
        alert("ERROR : "+xhr.responseText); 
      }
    });
  });

  $('#hapusSemua').click(function(){
    $('#konfirmasi').html('Apakah anda yakin ingin menghapus semua data ini?');
    $('#btn-hapus').hide();
    $('#btn-hapusSemua').show();
    $('#load').hide();
  });

  $("#btn-hapusSemua").click(function(){ 
    
    var data = new FormData();
    data.append('type', 'deleteAll');
    
    $("#load").show(); 
    
    $.ajax({
      url: 'ajax/calon.php',
      type: 'POST',
      data: data, 
      processData: false,
      contentType: false,
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ 
        $("#load").hide(); 
        $("#view").html(response.html);
        swal("Good job!", "Data berhasil dihapus", "success");
        $("#modal-hapus").modal('hide');
      },
      error: function (xhr, ajaxOptions, thrownError) { 
        alert("ERROR : "+xhr.responseText); 
      }
    });
  });


  /*============*/
  /*====Data====*/
  /*============*/
  $('#btn-upload').click(function(){
    
    var file = $('#file').val();
    if ( file == '' ) {
      swal("Oops...", "Form tidak boleh kosong!", "error");   
    }else{
      function hasExtension(inputID, exts) {
        var fileName = document.getElementById(inputID).value;
        return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
      }

      if(!hasExtension('file', ['.xls'])){
        swal("Oops...", "File XLS (Excel 97-2003) yang diizinkan!!", "error");
      }else{
        var data = new FormData();
        data.append('file', $('#file')[0].files[0]);
        data.append('type', 'insert');
        $('#loading').show();

        $.ajax({
          url         : 'ajax/data.php',
          type        : 'POST',
          data        : data,
          processData : false,
          contentType : false,
          dataType    : 'json',
          beforeSend  : function(e) {
            if(e && e.overrideMimeType) {
              e.overrideMimeType("application/json;charset=UTF-8");
            }
          },
          success     : function(response){ 
            $("#loading").hide(); 
            
            if(response.status == "sukses"){ 
              $("#view-data").html(response.html);
              swal("Good job!", "Data berhasil diupload", "success");
              $("#form input").val(""); 
              $("#modal-tambah").modal('hide'); 
            }else{ 
              swal("Oops...", "Ada yang error!", "error");
            }
          },
          error       : function (xhr, ajaxOptions, thrownError) {
            alert("ERROR : "+xhr.responseText); 
          }
        });
      }
    }

  });

  $('#load').hide();
  $("#btn-hapusData").click(function(){ 
    
    var data = new FormData();
    data.append('type', 'delete');
    
    $("#load").show(); 
    
    $.ajax({
      url: 'ajax/data.php',
      type: 'POST',
      data: data, 
      processData: false,
      contentType: false,
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ 
        $("#load").hide(); 
        $("#view-data").html(response.html);
        swal("Good job!", "Data berhasil dihapus", "success");
        $("#modal-hapus").modal('hide');
      },
      error: function (xhr, ajaxOptions, thrownError) { 
        alert("ERROR : "+xhr.responseText); 
      }
    });
  });

  /*============*/
  /*====Pilih===*/
  /*============*/
  $('#form-login').submit(function(){

    var data = new FormData();
    data.append('nama', $('#nama').val());
    data.append('nis', $('#nis').val());
    data.append('type', 'login');

    $.ajax({
      url        : 'ajax/pilih.php',
      data       : data,
      type       : 'POST',
      processData: false,
      contentType: false,
      dataType   : "json",
      beforeSend : function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success    : function(response){
        if(response.status == "sukses"){ 
          document.location="index.php";
        }else{ 
          swal("Oops...", "Ada yang error!", "error");
        }
      },
      error      : function (xhr, ajaxOptions, thrownError) { 
        alert("ERROR : "+xhr.responseText); 
      }
    });

  });

  $('#btn-pilih').click(function(){

    var data = new FormData();
    data.append('id', $('#data-id').val());
    data.append('type', 'pilih');

    $.ajax({
      url        : 'ajax/pilih.php',
      data       : data,
      type       : 'POST',
      processData: false,
      contentType: false,
      dataType   : "json",
      beforeSend : function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success    : function(response){
        if(response.status == "sukses"){ 
          swal("Good job!", "Terima kasih", "success");
          document.location="index.php";
        }else{ 
          swal("Oops...", "Ada yang error!", "error");
        }
      },
      error      : function (xhr, ajaxOptions, thrownError) { 
        alert("ERROR : "+xhr.responseText); 
      }
    });

  });

});