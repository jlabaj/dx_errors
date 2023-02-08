import { Component } from "@angular/core";
import { Employee, Priority, Service, Task } from "./app.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	tasks: Task[];

	employees: Employee[];

	priorities: Priority[];

	statuses: string[];

	constructor(service: Service) {
		this.tasks = service.getTasks();
		this.employees = service.getEmployees();
		this.priorities = service.getPriorities();

		this.statuses = [
			"Not Started",
			"Need Assistance",
			"In Progress",
			"Deferred",
			"Completed",
		];

		this.onReorder = this.onReorder.bind(this);
	}

	onReorder(e) {
		const visibleRows = e.component.getVisibleRows();
		const toIndex = this.tasks.findIndex(
			(item) => item.Task_ID === visibleRows[e.toIndex].data.Task_ID
		);
		const fromIndex = this.tasks.findIndex(
			(item) => item.Task_ID === e.itemData.Task_ID
		);

		this.tasks.splice(fromIndex, 1);
		this.tasks.splice(toIndex, 0, e.itemData);
	}

	getCompletionText(cellInfo) {
		return `${cellInfo.valueText}%`;
	}
}
