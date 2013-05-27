package org.got5.techforum.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
@Entity
@Table(name="Conference")
public class Conference {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	public int id;
	
	public String title;
	
	public String beginTime;
	
	public String endingTime;
	
	@Enumerated(EnumType.STRING)
	public Category category;
	
	@Enumerated(EnumType.STRING)
	public Day day;
	
	public String description;
	
	public long likes;
	
	@Enumerated(EnumType.STRING)
	public Room room;
	
	public String speaker;
	
	public boolean allowFeedbacks;
	
	public Conference() {
		
	}
	
	public Conference(int id, String beginTime, String endingTime, Category category, Day day, String description, 
			long likes, Room room, String speaker, String title, boolean alloFeedbacks) {
		this.id = id;
		this.beginTime = beginTime;
		this.endingTime = endingTime;
		this.category = category;
		this.day = day;
		this.description = description;
		this.likes = likes;
		this.room = room;
		this.speaker = speaker;
		this.title = title;
		this.allowFeedbacks = alloFeedbacks;
	}
}
