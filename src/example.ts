import { initWorkflow, jobs } from './main';

const t: any = undefined; // typed-actions helper.

const w = initWorkflow({
  name: 'my-workflow',
  on: {
    pullRequest: {
      types: ['opened', 'synchronize'],
      branches: ['preview/develop'],
    },
  },
  env: {
    artifact_web_name: 'web_api',
    name: 'web-api',
    slot_name: 'preview',
    resource_group: 'my-resource-group',
  },
});

const workflows = jobs({
  error: {
    // if: `contains(github.event.pull_request.title, '"') == true`,
    if: t.equal(t.contain(t.github('event.pull_request.title'), '"'), true),
    runsOn: 'ubuntu-latest',
    steps: [
      {
        run: "echo 'Hello World!'",
      },
      {
        name: 'Download artifact from build job',
        uses: 'actions/download-artifact@v2',
        with: {
          name: t.env('artifact_web_name'), // Compile to '${{ env.artifact_web_name }}'
        },
      },
      {
        name: 'Get Publish Profile',
        id: 'get-publish-profile',
        uses: 'mildronize/actions-az-cli/webapp/deployment/list-publishing-profiles@v1',
        with: {
          azure_credentials: t.secrets('AZURE_CREDENTIAL'), // Compile to '${{ secrets.AZURE_CREDENTIAL }}'
          name: t.env('name'), // Compile to '${{ env.name }}'
          slot: t.env('slot_name'), // Compile to '${{ env.slot_name }}'
          resource_group: '${{ env.resource_group }}', // Compile to '${{ env.resource_group }}'
        },
      },
      {
        name: 'Deploy to Azure Web App',
        id: 'deploy-to-webapp',
        uses: 'azure/webapps-deploy@v2',
        with: {
          'app-name': t.env('app_name'), // compile to '${{ env.app_name }}'
          'publish-profile': t.steps('get-publish-profile').outputs('publish_profile'), // Compile to '${{ steps.get-publish-profile.outputs.publish_profile }}'
          'package': '.',
          'slot-name': t.env('slot_name'), // compile to '${{ env.slot_name }}'
        },
      },
      {
        name: `Save stats ${t.env('name')}`, // Compile to 'Save stats ${{ env.name }}'
        if: t.always(), // if: 'always()',
        run: 'node ./save-stats.js',
      },
    ],
  },
  build: {
    if: t.equal(t.contain(t.github('event.pull_request.title'), '"'), false),
    runsOn: 'ubuntu-latest',
    steps: [
      {
        name: 'Checkout',
        run: "echo 'Hello World!'",
      },
    ],
  },
});

export default workflows;
