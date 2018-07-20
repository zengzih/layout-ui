export const Node = function(options) {
  this.init(options);
};
Node.prototype.init = function(options) {
  this.text = null;
  this.indeterminate = false;
  this.data = null;
  this.letter = '';
  if (options.store.defaultExpandAll) {
    this.expanded = true;
  } else {
    this.expanded = false;
  }
  this.parent = null;
  this.disabled = false;
  this.visible = true;
  this.nodeActive = false;
  this.store = {};
  this.isActive = false;
  for (var name in options) {
    if (options.hasOwnProperty(name)) {
      this[name] = options[name];
      for (var n in options.data) {
        if (this.hasOwnProperty(n)) {
          if (n === 'disabled') {
            if (options.data[n] === 'true') {
              options.data[n] = true;
            }
            if (options.data[n] === 'false' || options.data[n] === '') {
              options.data[n] = false;
            }
          }
          this[n] = options.data[n];
        }
      }
    }
  }
  const nodeKey = this.store.defaultProps.nodeKey || 'id';
  if (this.store.defaultExpandedKeys && this.store.siderToggled && this.store.defaultExpandedKeys.indexOf(this.data[nodeKey]) !== -1) {
    this.NodeExpand();
  }
  this.level = 0;
  this.childNodes = [];
  if (this.parent) {
    this.level = this.parent.level + 1;
    if (!this.disabled) {
      this.disabled = this.parent.disabled;
    }
    if (this.level > 0) {
      this.height = this.data.children ? this.data.children.length * 30 : '';
    }
    // if (this.store.childExpand && this.level > 1) {
    //   this.expanded = this.data.children && this.data.children.length > 0;
    // }
  }
  // this.expanded = !this.level === 1;
  if (this.data) {
    this.setData(this.data);
  }
};

Node.prototype.setData = function(data) {
  this.data = data;
  this.childNodes = [];
  var children;
  if (this.level === 0 && this.data instanceof Array) {
    children = this.data;
  } else {
    children = data.children || [];
  }

  for (var i = 0, j = children.length; i < j; i++) {
    this.insertChild({data: children[i]});
  }
};

Node.prototype.insertChild = function(child) {
  if (!(child instanceof Node)) {
    Object.assign(child, {
      parent: this,
      store: this.store
    });
    var childs = new Node(child);
  }
  childs.level = this.level + 1;
  this.childNodes.push(childs);
};

Node.prototype.NodeExpand = function() {
  const done = () => {
    let parent = this.parent;
    while (parent && parent.level > 0) {
      parent.expanded = true;
      parent = parent.parent;
    }
    this.expanded = true;
  };
  done();
};
