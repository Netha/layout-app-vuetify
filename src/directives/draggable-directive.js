import Vue from 'vue'

//  Dragging directive
Vue.directive('draggable', {
  bind: function (el, binding, vnode) {
    vnode.handleDragStart = function (e) {
      e.target.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', '*');
      vnode.context.$emit('dragstart');
    }.bind(vnode);

    vnode.handleDragEnter = function (e) {
      vnode.context.$emit('drag-enter');
    }.bind(vnode);

    vnode.handleDragOver = function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.dataTransfer.dropEffect = 'move';
      e.target.classList.add('drag-over');
      vnode.context.$emit('drag-over');

      return false;
    }.bind(vnode);

    vnode.handleDrag = function () {
      vnode.context.$emit('drag');
    }.bind(vnode);
   
    vnode.handleDragLeave = function (e) {
      vnode.context.$emit('drag-leave');
      e.target.classList.remove('drag-enter', 'drag-over');
    }.bind(vnode);

    vnode.handleDragEnd = function (e) {
      e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
      vnode.context.$emit('drag-end');
    }.bind(vnode);

    vnode.handleDrop = function (e) {
      e.preventDefault();
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      vnode.context.$emit('drop');
      return false;
    }.bind(vnode);

    // set events listeners
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', vnode.handleDragStart, false);
    el.addEventListener('dragenter', vnode.handleDragEnter, false);
    el.addEventListener('dragover', vnode.handleDragOver, false);
    el.addEventListener('drag', vnode.handleDrag, false);
    el.addEventListener('dragleave', vnode.handleDragLeave, false);
    el.addEventListener('dragend', vnode.handleDragEnd, false);
    el.addEventListener('drop', vnode.handleDrop, false);
  },
  unbind: function (el, binding, vnode) {
    // end events
    el.classList.remove('dragging', 'drag-over', 'drag-enter');
    el.removeAttribute('draggable');
    el.removeEventListener('dragstart', vnode.handleDragStart);
    el.removeEventListener('dragenter', vnode.handleDragEnter);
    el.removeEventListener('dragover', vnode.handleDragOver);
    el.removeEventListener('dragleave', vnode.handleDragLeave);
    el.removeEventListener('drag', vnode.handleDrag);
  }
});