function isTeamMember(project, user) {
  const len = project.team.length;
  var i;
  for (i = 0; i < len; i++) {
    if (project.team[i].equals(user._id)) {
      return true;
    }
  }
  if (i === len) {
    return false;
  }
}

module.exports = isTeamMember;
