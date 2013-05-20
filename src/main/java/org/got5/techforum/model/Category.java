package org.got5.techforum.model;

public enum Category {
	CONFERENCE("Conference"),
	DEMO("Demo"),
	POSTER("Poster");
	
	private String name;
	
	Category(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return name;
	}
}
