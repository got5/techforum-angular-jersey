package org.got5.techforum.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Search criteria.
 */
@XmlRootElement
public class SearchConferenceCriteria {
	
	// Search criteria fields.
	public static final String[] SEARCH_CRITERIAS = { "title", "category", "day", "room" };
	
	private static final String NULL_CRITERIA = "null";
	
	@XmlElement
	public int start = -1;
	
	@XmlElement
	public int nb = -1;
	
	@XmlElement
	public String title;
	
	@XmlElement
	public String category;
	
	@XmlElement
	public String day;
	
	@XmlElement
	public String room;
	
	public SearchConferenceCriteria() {

	}

	public SearchConferenceCriteria(int start, int nb) {
		this.start = start;
		this.nb = nb;
	}

	public SearchConferenceCriteria(int start, int nb, String title, String category, String day, String room) {
		this(start, nb);
		
		if (title != NULL_CRITERIA) {
			this.title = title;
		}
		
		if (category != null && !category.equals(NULL_CRITERIA)) {
			this.category = category;
		}
		
		if (day != null && !day.equals(NULL_CRITERIA)) {
			this.day = day;
		}
		
		if (room != null && !room.equals(NULL_CRITERIA)) {
			this.room = room;
		}
	}
}
