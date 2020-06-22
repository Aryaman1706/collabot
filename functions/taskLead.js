function isTaskLead(task, user) {
  if (task.taskLead.equals(user._id)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTaskLead;
