function alreadyAssigned(task, id) {
  const len = task.assignedTo.length;
  var i;
  for (i = len - 1; i >= 0; i--) {
    if (task.assignedTo[i].equals(id)) {
      return true;
    }
  }
  if (i < 0) {
    return false;
  }
}

module.exports = alreadyAssigned;
