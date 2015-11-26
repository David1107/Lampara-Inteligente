
var estado = require('node_models/config/models');
var agregarEstado = require('node_models/config/agregarEstado.js');

jQuery(function($) {
		
        $(document).ready( function() {

            // 
        //var script = document.createElement('script');
        //script.type = 'text/javascript';
        //script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
         //   'callback=initialize';
        //document.body.appendChild(script);

        
        $('#happy').click(function(){
            agregarEstado.agregar('Feliz',new Date());
            actualizarEstado();
        });

        $('#relaxed').click(function(){
            agregarEstado.agregar('Relajado',new Date());
            actualizarEstado();
        });

        $('#sad').click(function(){
            agregarEstado.agregar('Triste',new Date());
            actualizarEstado();
        });

        $('#angry').click(function(){
            agregarEstado.agregar('Bravo',new Date());
            actualizarEstado();
        });

        function actualizarEstado(){
            
            var recientes = agregarEstado.estadoActual();
            var estado;
            int vecesFeliz=0;
            int vecesTriste=0;
            int vecesRelajado=0;
            int vecesBravo=0;
            for(int i=0;i<recientes.length();i++)
            {
                if(recientes[i]=="Feliz")
                {
                    vecesFeliz++;
                } else if(recientes[i]=="Relajado")
                {
                    vecesRelajado++;
                } else if(recientes[i]=="Triste")
                {
                    vecesTriste++;
                } else if(recientes[i]=="Bravo")
                {
                    vecesBravo++;
                } 
            }
            if(vecesFeliz>=vecesTriste && vecesFeliz>=vecesRelajado && vecesFeliz>=vecesBravo)
            {
                estado="Feliz";
            } else if(vecesRelajado>=vecesFeliz && vecesRelajado>=vecesTriste && vecesRelajado>=vecesBravo)
            {
                estado=Relajado;
            } else if(vecesTriste>=vecesFeliz && vecesTriste>=vecesRelajado && vecesTriste>=vecesBravo)
            {
                estado=Triste;
            } else
            {
                estado=Bravo;
            }
            document.getElementById("estadoActual").innerHTML="Usted últimamente ha estado: "+estado;
            window.location.reload();
        });
        
        });

    });
});
