import type { RouteDefinition } from "@solidjs/router";

export const route = {
  info: {
    title: () => "Explore",
  },
} satisfies RouteDefinition;

export default function IndexRoute() {
  return (
    <div class="space-y-6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit tempora nisi hic iste alias odio
        dolorem, natus quasi et quibusdam recusandae sequi, exercitationem deserunt sit nobis laboriosam. Maxime
        quisquam sapiente mollitia architecto ducimus. Necessitatibus dicta quis sit eius praesentium similique
        recusandae ad delectus labore, deserunt voluptates! Sequi unde adipisci, magni, vero libero deleniti nostrum
        quae eius perferendis tenetur aliquid consequatur quaerat sunt modi odit quam non, quidem laborum consequuntur
        deserunt corporis mollitia voluptatum blanditiis illo. Accusantium pariatur, tempore magnam excepturi, fugit
        doloribus, a suscipit culpa nemo voluptatum perspiciatis consequuntur fuga qui quod laborum non reprehenderit
        laudantium vitae laboriosam ipsum.
      </p>
    </div>
  );
}
