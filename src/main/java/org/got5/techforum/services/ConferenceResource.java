package org.got5.techforum.services;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.got5.techforum.model.Conference;
import org.hibernate.Query;

@Path("/conferences")
public class ConferenceResource extends BaseResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConferences() {
		Query query = getSession().createQuery("FROM Conference");

		@SuppressWarnings("unchecked")
		List<Conference> conferences = query.list();
		
		GenericEntity<List<Conference>> entity = new GenericEntity<List<Conference>>(
				conferences) {
		};
		return Response.ok(entity).build();
	}
	
	@GET
	@Path("/start/{start}/nb/{nb}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConferences(@PathParam("start") int start, @PathParam("nb") int nb) {
		if (start < 0 || nb < 1) {
			return Response.serverError().build();
		}
		
		Query query = getSession().createQuery("FROM Conference");
		query.setFirstResult(start);
		query.setMaxResults(nb);

		@SuppressWarnings("unchecked")
		List<Conference> conferences = query.list();
		
		GenericEntity<List<Conference>> entity = new GenericEntity<List<Conference>>(
				conferences) {
		};
		return Response.ok(entity).build();
	}

	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConferenceById(@PathParam("id") long id) {
		Query query = getSession().createQuery("FROM Conference WHERE id=?").setLong(0, id);
		Conference conference = (Conference)(query.uniqueResult());
		return Response.ok(conference).build();
	}

	@POST
	public Response post(Conference conference) {
		return Response.ok(conference).build();
	}

}
