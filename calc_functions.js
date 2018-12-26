var a='';
            function num(i){
              a=a+""+i;
              document.getElementById("expression").value=a; 
            }

            function division(){
                a=a+""+" "+"/"+" ";
                document.getElementById("expression").value=a;
            }

            function multiplication(){
                a=a+""+" "+"*"+" ";

                document.getElementById("expression").value=a;
            }

            function sub(){
                a=a+""+" "+"-"+" ";
                document.getElementById("expression").value=a;
            }

            function point(){
                a=a+""+".";
                document.getElementById("expression").value=a;    
            }

            function add(){
                a=a+""+" "+"+"+" ";
                document.getElementById("expression").value=a;
            }

            function ans(){
                var x = "";
                var b = a.split(" ");
                var j=0;
                while(j<b.length){
                    if(b[j+1]=='/'){
                      if(b[j+2] == 0){
                        x = "NaN";
                      }else{
                        x = b[j]/b[j+2];
                      }
                        
                    }
                    else if(b[j+1]=='*' ){
                        x = b[j]*b[j+2];
                    }
                    else if(b[j+1]=='-'){
                        x = b[j]-b[j+2];
                    }
                    else if(b[j+1]=='+'){
                        x = parseFloat(b[j])+parseFloat(b[j+2]);
                    }

                    if(j+2 == b.length)
                    {
                       j=j+1;
                    }
                    j=j+2;
                }
                document.getElementById("expression").value=x;
                a='';
            }
            function clearr(){
                document.getElementById("expression").value='';
                a='';
            }
