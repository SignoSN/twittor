
// Guarda en cache

function updateDynaCache( dynaCache, req, res )
{
	if( res.ok ){
		return caches.open( dynaCache ).then( cache => {
			cache.put( req, res.clone() );
			return res.clone();
		});
	}else{
		return res;
	}
}