package ar.com.dcc.springextjs.controller;

import ar.com.dcc.springextjs.model.GroupAssignment;
import ar.com.dcc.springextjs.model.Permission;
import ar.com.dcc.springextjs.model.User;
import ar.com.dcc.springextjs.service.GroupAssignmentServiceImp;
import ar.com.dcc.springextjs.service.IPermissionService;
import ar.com.dcc.springextjs.service.IUserService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

  @Autowired
  IUserService userService;

  @Autowired
  GroupAssignmentServiceImp gaService;

  @Autowired
  IPermissionService permissionService;

  @RequestMapping(value = "/")
  public String home() {
    return "redirect:/index";
  }

  @RequestMapping(value = "/index")
  public String index() {
    return "index";
  }

  @ResponseBody
  @RequestMapping(
    value = "/allUsers",
    method = RequestMethod.GET,
    produces = "Application/json"
  )
  public Map<String, List<User>> allUsers() {
    Map<String, List<User>> users = new HashMap<String, List<User>>();
    users.put("users", userService.listAllUsers());
    return users;
    // return userService.listAllUsers();
  }

  @ResponseBody
  @RequestMapping(
    value = "/allGa",
    method = RequestMethod.GET,
    produces = "Application/json"
  )
  public List<GroupAssignment> allGa() {
    return gaService.getAllGa();
  }

  @RequestMapping(
    value = "/permission",
    method = RequestMethod.GET,
    produces = "Application/json"
  )
  public List<Permission> ListByTypePermission(@RequestParam String type) {
    return permissionService.getByType(type);
  }

  @RequestMapping(
    value = "/addUser",
    method = RequestMethod.POST,
    produces = "Application/json"
  )
  public User addUser(@RequestBody User user) {
    return userService.addUser(user);
  }
}
