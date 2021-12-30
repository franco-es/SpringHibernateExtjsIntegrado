package ar.com.dcc.springextjs.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ar.com.dcc.springextjs.model.Grupo;
import ar.com.dcc.springextjs.service.IGroupService;

@Controller
@RequestMapping("group")
public class GroupController {
	@Autowired
	private IGroupService groupService;
	
	@ResponseBody
	@RequestMapping(value="/all",
										method = RequestMethod.GET,
										produces= "application/json")
	public Map<String, List<Grupo>> allGroups(){
		Map<String, List<Grupo>> groups = new HashMap<String, List<Grupo>>();
		groups.put("groups", groupService.getAll());
		return groups;
	}
	
}
