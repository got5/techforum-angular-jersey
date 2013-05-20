package org.got5.techforum.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Feedback {
	public long id;
	public String comment;
	public String date;
	public String email;
	public String name;
}
