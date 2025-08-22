import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { MatIcon } from '@angular/material/icon';
import { TaskWithSubTasks } from '../../task.model';
import { T } from 'src/app/t.const';
import { IS_TOUCH_PRIMARY } from 'src/app/util/is-mouse-primary';
import { TaskComponent } from '../task.component';
import { TranslateModule } from '@ngx-translate/core';
import { KeyboardConfig } from '../../../config/keyboard-config.model';
import { ICAL_TYPE } from '../../../issue/issue.const';
import { MatIconButton } from '@angular/material/button';
import { TaskPriority } from '@super-productivity/plugin-api';

@Component({
  selector: 'task-hover-controls',
  imports: [MatIcon, TranslateModule, MatIconButton],
  templateUrl: './task-hover-controls.component.html',
  styleUrl: './task-hover-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHoverControlsComponent {
  parent = inject<TaskComponent>(TaskComponent);

  task = input.required<TaskWithSubTasks>();
  isCurrent = input.required<boolean>();
  isSelected = input.required<boolean>();
  isShowAddToToday = input.required<boolean>();
  isShowRemoveFromToday = input.required<boolean>();
  isBacklog = input<boolean>(false);
  isInSubTaskList = input<boolean>(false);

  T: typeof T = T;
  IS_TOUCH_PRIMARY: boolean = IS_TOUCH_PRIMARY;

  get kb(): KeyboardConfig {
    return this.parent.kb;
  }

  protected readonly ICAL_TYPE = ICAL_TYPE;
  protected readonly TaskPriority = TaskPriority;

  getPriorityIcon(priority?: TaskPriority): string {
    switch (priority) {
      case TaskPriority.HIGH:
        return 'keyboard_double_arrow_up';
      case TaskPriority.MEDIUM:
        return 'keyboard_arrow_up';
      case TaskPriority.LOW:
        return 'keyboard_arrow_down';
      case TaskPriority.NONE:
      default:
        return 'low_priority';
    }
  }

  getPriorityColor(priority?: TaskPriority): string {
    switch (priority) {
      case TaskPriority.HIGH:
        return '#f44336'; // red
      case TaskPriority.MEDIUM:
        return '#ff9800'; // orange
      case TaskPriority.LOW:
        return '#2196f3'; // blue
      case TaskPriority.NONE:
      default:
        return '#757575'; // gray
    }
  }

  getPriorityTooltip(priority?: TaskPriority): string {
    switch (priority) {
      case TaskPriority.HIGH:
        return 'Priority: High [r]';
      case TaskPriority.MEDIUM:
        return 'Priority: Medium [r]';
      case TaskPriority.LOW:
        return 'Priority: Low [r]';
      case TaskPriority.NONE:
      default:
        return 'Set Priority [r]';
    }
  }

  onPriorityClick(): void {
    this.parent.cyclePriority();
  }
}
