package org.got5.techforum.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import org.got5.techforum.model.Feedback;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class FeedbackResource extends BaseResource {
	@GET
    @Path("/{id}")
    public Response get(@PathParam("id") long id) {
		List<Feedback> feedbacks = new ArrayList<Feedback>(); //TODO
		GenericEntity<List<Feedback>> entity = new GenericEntity<List<Feedback>>(feedbacks) {};
		return Response.ok(entity).build();
    }
}
