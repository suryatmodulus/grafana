import { VizPanel } from '../components';
import { NestedScene } from '../components/NestedScene';
import { EmbeddedScene, Scene } from '../components/Scene';
import { SceneTimePicker } from '../components/SceneTimePicker';
import { SceneFlexLayout } from '../components/layout/SceneFlexLayout';
import { SceneTimeRange } from '../core/SceneTimeRange';
import { SceneEditManager } from '../editor/SceneEditManager';

import { getQueryRunnerWithRandomWalkQuery } from './queries';

export function getSceneWithRows(standalone: boolean): Scene {
  const state = {
    title: 'Scene with rows',
    layout: new SceneFlexLayout({
      direction: 'column',
      children: [
        new NestedScene({
          title: 'Overview',
          canCollapse: true,
          // size: { ySizing: 'content', xSizing: 'fill' },
          layout: new SceneFlexLayout({
            direction: 'row',
            children: [
              new VizPanel({
                pluginId: 'timeseries',
                title: 'Fill height',
              }),
              new VizPanel({
                pluginId: 'timeseries',
                title: 'Fill height',
              }),
            ],
          }),
        }),
        new NestedScene({
          title: 'More server details',
          // size: { ySizing: 'content', xSizing: 'fill' },
          canCollapse: true,
          layout: new SceneFlexLayout({
            direction: 'row',
            children: [
              new VizPanel({
                pluginId: 'timeseries',
                title: 'Fill height',
              }),
              new VizPanel({
                pluginId: 'timeseries',
                title: 'Fill height',
              }),
            ],
          }),
        }),
      ],
    }),
    $editor: new SceneEditManager({}),
    $timeRange: new SceneTimeRange(),
    $data: getQueryRunnerWithRandomWalkQuery(),
    actions: [new SceneTimePicker({})],
  };

  return standalone ? new Scene(state) : new EmbeddedScene(state);
}
