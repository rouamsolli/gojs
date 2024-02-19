import { Component, OnInit } from '@angular/core';
import { Edge, Node as GraphNode } from '@swimlane/ngx-graph';

interface SelectionChangeEvent<T> {
  nodes: T[];
  links: T[];
}

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})

export class WorkflowComponent implements OnInit {
  nodes: GraphNode[] = [
    { id: 'start', label: 'Début' },
    { id: 'send', label: 'Envoi email' },
    { id: 'stop', label: 'Fin' }
  ];

  links: Edge[] = [
    { id: 'start-send', source: 'start', target: 'send' },
    { id: 'send-stop', source: 'send', target: 'stop' }
  ];

  layoutAlgorithm = 'dagre';
  autoZoom = true;
  maxZoom = 10;
  minZoom = 0.1;
  viewport = { left: 0, top: 0, width: 800, height: 600 };
  fitView = true;
  zoom = 1;

  onSelectionChange(event: SelectionChangeEvent<GraphNode>) {
    console.log('Nodes selected:', event.nodes);
  }

  onContextmenu(event: MouseEvent) {
    console.log('Context menu:', event);
  }

  ngOnInit() {
  }
}
