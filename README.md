# Training_backend_imuko

Training Rutas_Medicas 

MongoDb Cluster Atlas 

Import Command:
mongoimport --host cluster0-shard-00-00.xs1fd.mongodb.net:27017 --db rutas_medicas 
            --authenticationDatabase admin --username ftsuser420 --password ftsFTS1234 
            --type json --file eps.json
            
MongoDb Access:
 shell
 mongo "mongodb+srv://cluster0.xs1fd.mongodb.net/rutas_medicas" --username ftsuser420
 
 App
 mongodb+srv://ftsuser420:ftsFTS1234@cluster0.xs1fd.mongodb.net/rutas_medicas?retryWrites=true&w=majority
 
 Compass:
 mongodb+srv://ftsuser420:<password>@cluster0.xs1fd.mongodb.net/rutas_medicas
 
 
 
 
 
