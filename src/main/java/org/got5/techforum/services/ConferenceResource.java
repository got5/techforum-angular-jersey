package org.got5.techforum.services;

import java.lang.reflect.Field;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.got5.techforum.model.Conference;
import org.got5.techforum.model.SearchConferenceCriteria;
import org.hibernate.Query;

@Path("/conferences")
public class ConferenceResource extends BaseResource {
	
	private static final String CONFERENCE_TABLE_NAME = "Conference";
	
	/**
	 * Returns a given number of conferences, starting at a given index.
	 * 
	 * @param start
	 * @param nb
	 * @return Response
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConferences(@QueryParam("start") int start, @QueryParam("nb") int nb,
			@QueryParam("title") String title, @QueryParam("category") String category,
			@QueryParam("room") String room, @QueryParam("day") String day) {
		return createResponseFromCriteria(new SearchConferenceCriteria(start, nb, title, category, day, room));
	}
	
	/**
	 * Searches and returns a conference by its id.
	 * 
	 * @param id
	 * @return Response
	 */
	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConferenceById(@PathParam("id") long id) {
		Query query = getSession().createQuery("FROM Conference WHERE id=?").setLong(0, id);
		Conference conference = (Conference)(query.uniqueResult());
		return Response.ok(conference).build();
	}
	
	/**
	 * Updates the given conference.
	 * 
	 * @param id
	 * @param conf
	 * @return Response
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}/update")
	public Response post(@PathParam("id") long id, Conference conf) {
		String strQuery = "UPDATE " + CONFERENCE_TABLE_NAME + " SET title=? WHERE id=?";
			
		//TODO: handle other properties.
		Query query = getSession().createQuery(strQuery).setString(0, conf.title).setLong(1, id);
		query.executeUpdate();
			
		return Response.ok().build();
	}
	
	/**
	 * Deletes a conference by its id.
	 * 
	 * @param id
	 * @return Response
	 */
	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id") long id) {
		Query query = getSession().createQuery("DELETE " + CONFERENCE_TABLE_NAME + " WHERE id=?").setLong(0, id);
		query.executeUpdate();
		
		return Response.ok().build();
	}
	
	/**
	 * Creates response from a criteria.
	 * 
	 * @param criteria
	 * @return Response
	 */
	private Response createResponseFromCriteria(SearchConferenceCriteria criteria) {
		return createResponseFromQuery(createQuery(criteria));
	}
	
	/**
	 * Creates hibernate query object from search criteria.
	 * 
	 * @param criteria
	 * @return Query
	 */
	private Query createQuery(SearchConferenceCriteria criteria) {
		String strQuery = "FROM " + CONFERENCE_TABLE_NAME;
		
		Class<SearchConferenceCriteria> confClass = SearchConferenceCriteria.class;
		Field field;
		Object valueField;
		if (criteria != null) {
			boolean bWhereAdded = false;
			//Loop^on every search criteria, which is added to the SQL request if its value is not null.
			for (String attribute : SearchConferenceCriteria.SEARCH_CRITERIAS) {
				try {
					field = confClass.getDeclaredField(attribute);
					valueField = field.get(criteria);
					if (valueField != null) {
						strQuery += (bWhereAdded ? " AND " : " WHERE ") + attribute + " LIKE '" + valueField + "%'";
						bWhereAdded = true;
					}
				} catch(Exception exception) {
					//No way...
				}
			}
		}
		
		Query query = getSession().createQuery(strQuery);
		
		//Start Index and number of results returned
		if (criteria != null) {
			if (criteria.start > -1) {
				query.setFirstResult(criteria.start);
			}
			if (criteria.nb > 0) {
				query.setMaxResults(criteria.nb);
			}
		}
		
		return query;
	}
	
	/**
	 * Creates a response from hibernate query.
	 * 
	 * @param query
	 * @return Response
	 */
	private Response createResponseFromQuery(Query query) {
		@SuppressWarnings("unchecked")
		List<Conference> conferences = query.list();
		
		GenericEntity<List<Conference>> entity = new GenericEntity<List<Conference>>(conferences) {};
		return Response.ok(entity).build();
	}

}
